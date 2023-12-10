import Form from "react-bootstrap/Form";
import React from "react";
import './report.css'
import data from "../../data/data";

export default function ReportForm() {
    return <Form action={"https://forms.gle/bLVHy1hLzhKeLEv29"} method="post" className="max-size">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="pad-form" type="text" name="sname" placeholder={data.report.form.name}/>
            <Form.Control className="pad-form" type="tel" placeholder={data.report.form.phone}/>
            <Form.Control className="pad-form" type="email" placeholder={data.report.form.email}/>
            <Form.Control className="pad-form" as="textarea" type="text" placeholder={data.report.form.comment}/>
            <Form.Control type="submit" value={data.report.form.btn}/>
        </Form.Group>
    </Form>
}