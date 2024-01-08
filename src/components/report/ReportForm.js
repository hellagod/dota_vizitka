import Form from "react-bootstrap/Form";
import React, {useState} from "react";
import './report.css'
import data from "../../data/data";
import Email from '../../data/email'

export default function ReportForm() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    function handleVoid() {
        setText("")
        setEmail("")
        setPhone("")
        setName("")
    }

    return <Form action="javascript:void(0);" onSubmit={() => {
        Email.send({
            SecureToken: "46749110-8a49-42ca-bcfb-1f102f7cedbd",
            To: "info@gabemedia.ru",
            From: "info@gabemedia.ru",
            Subject: "GabeMedia",
            Body: `Имя: ${name}<br>Телефон: ${phone}<br>Почта: ${email}<br>Комментарий: ${text}`,
        })
            .then(function (message) {
                if (message === "OK") {
                    alert('Форма успешно отправлена')
                    handleVoid()
                } else {
                    alert('Что-то пошло не так')
                    console.log(message)
                }
            });
        return true
    }} className="max-size">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="pad-form" type="text" value={name}
                          onChange={e => setName(e.target.value)} placeholder={data.report.form.name}/>
            <Form.Control className="pad-form" type="tel" value={phone}
                          onChange={e => setPhone(e.target.value)} placeholder={data.report.form.phone}/>
            <Form.Control className="pad-form" type="email" value={email}
                          onChange={e => setEmail(e.target.value)} placeholder={data.report.form.email}/>
            <Form.Control className="pad-form" as="textarea" type="text" value={text}
                          onChange={e => setText(e.target.value)}
                          placeholder={data.report.form.comment}/>
            <Form.Control type="submit" value={data.report.form.btn}/>
        </Form.Group>
    </Form>
}