import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ setUser }) {
    const [form, setForm] = useState({ FName: "", LName: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(form);
        navigate("/FormList");
    };

    return (
        <>
            <h1>Selamat Datang</h1>
            <form className="formPage" onSubmit={handleSubmit} style={{ marginTop: 40 }}>
                <input
                    className="fullName"
                    name="FName"
                    type="text"
                    placeholder="First Name"
                    value={form.FName}
                    onChange={handleChange}
                    required
                />
                <input
                    className="fullName"
                    name="LName"
                    type="text"
                    placeholder="Last Name"
                    value={form.LName}
                    onChange={handleChange}
                    required
                />
                <input
                    className="fullName"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default FormPage;