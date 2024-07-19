
export interface EmailTemplateProps {
    name: string;
    email: string;
    issue: string;
    msg: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    issue,
    msg
}) => (
    <div>
        <h2>Mensaje de: <i>{name}</i></h2>
        <h4><span>Asunto:</span> <strong>{issue}</strong></h4>
        <h4><span>Correo:</span> <strong>{email}</strong></h4>
        <hr />
        <p>{msg}</p>
        <br />
        <br />
        <p><i>Powered by <a href="https://www.ding.com.ar">Ding | Marketing & Development</a></i></p>
    </div>
);