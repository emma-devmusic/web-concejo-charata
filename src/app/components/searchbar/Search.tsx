import { Blog } from "@/app/types";
import { Category } from "@/app/types/store";
import { getterCategoriesFromDB } from "@/services/categories";
import { db } from "@/services/firebase";
import { Icon } from "@iconify/react/dist/iconify.js";
import { collection, getDocs, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { Dispatch, SetStateAction, use, useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Props {
    setBlogs: Dispatch<SetStateAction<Blog[]>>;
    blogsNumber: number;
    setFirstDocument: any;
    setLastDocument: any;
    setIsLoading: any;
    categorySelected: string;
    setCategorySelected: any;
}



export const Search = ({ setBlogs, blogsNumber, setFirstDocument, setLastDocument, setIsLoading, categorySelected, setCategorySelected }: Props) => {

    const [loadingCategories, setLoadingCategories] = useState(false)
    const [categories, setCategories] = useState([] as Category[])
    const [inputValue, setInputValue] = useState({
        keyword: '',
    })


    useEffect(() => {
        if (categories.length === 0) {
            setLoadingCategories(true)
            getterCategoriesFromDB('concejo-charata')
                .then(data => setCategories(data))
                .finally(() => setLoadingCategories(false))
        }
    }, [])

    useEffect(() => {
        if (categorySelected !== '') {
            setInputValue({ keyword: '' })
            const blogs = collection(db, "entity", `concejo-charata`, "blogs");
            let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'), where('category', '==', categorySelected))
            try {
                onSnapshot(q, (querySnapshot) => {
                    setFirstDocument(querySnapshot.docs[0])
                    setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                    setBlogs([])
                    querySnapshot.forEach((doc) => {
                        setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                        setIsLoading(false)
                    })
                })
            } catch (error) {
                setIsLoading(false)
                Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
            }
        } else {
            handleResetSearch()
        }
    }, [categorySelected])



    const handleSearch = async (e: any) => {
        e.preventDefault();
        let keyword = inputValue.keyword.trim()
        if (keyword !== '') {
            const arrayWords = keyword.toLowerCase().split(' ');
            const q = query(
                collection(db, "entity", `concejo-charata`, "blogs"),
                where("keywords", "array-contains-any", arrayWords)
            );
            const querySnapshot = await getDocs(q);
            const matchedResults = querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: { ...doc.data() },
            }));
            setBlogs(matchedResults as Blog[]);
        }
    }


    const handleResetSearch = () => {
        setInputValue({ keyword: '' })
        const blogs = collection(db, "entity", `concejo-charata`, "blogs");
        let q = query(blogs, limit(blogsNumber), orderBy('date', 'desc'))
        try {
            onSnapshot(q, (querySnapshot) => {
                setFirstDocument(querySnapshot.docs[0])
                setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1])
                setBlogs([])
                querySnapshot.forEach((doc) => {
                    setBlogs((state: any) => [...state, { id: doc.id, data: doc.data() }])
                    setIsLoading(false)
                })
            })
        } catch (error) {
            setIsLoading(false)
            Swal.fire('Error', 'Hubo un error en la base de datos', 'error');
        }
    }



    return (
        <div className="mb-5 wow slideInUp d-md-flex justify-content-center gap-2" data-wow-delay="0.1s">
            <form className="input-group" style={{ maxWidth: '600px' }} onSubmit={handleSearch}>
                <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Buscar"
                    name="keyword"
                    value={inputValue.keyword}
                    onChange={(e) => setInputValue({ ...inputValue, keyword: e.target.value })}
                    required
                />
                <button className="btn btn-primary px-4 fs-4" type="submit"><Icon icon={'material-symbols:search'} /></button>
                <button className="btn btn-outline-primary px-4 fs-4" onClick={handleResetSearch} style={{ border: 'none' }}><Icon icon={'hugeicons:reload'} /></button>
            </form>
            <div className="input-group w-100 w-sm-auto" style={{ maxWidth: '300px' }}>

                <select
                    className="form-select p-3"
                    name="categories"
                    onChange={(e: any) => setCategorySelected(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    {
                        loadingCategories
                            ? <option value="">Cargando Categorías...</option>
                            : categories.map(category => <option value={category.name} key={category.name}>{category.name}</option>)
                    }
                </select>
            </div>
        </div>
    );
};
