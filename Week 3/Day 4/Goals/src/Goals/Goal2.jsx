import React from 'react'
import { useUser } from '../hooks/useUser';

const Goal2 = () => {

    const { state, dispatch } = useUser()

    function handleSubmit(e) {
        e.preventDefault();

        if (!state.form.name.trim() || !state.form.email.trim() || !state.form.password.trim() || !state.form.phone.trim() || !state.form.gender) {
            alert("Please fill all fields");
            return;
        }

        const newUser = {
            ...state.form,
            id: crypto.randomUUID()
        }

        dispatch({
            type: "submit",
            payload: newUser
        })
    }

    function handleChange(e) {
        dispatch({
            type: "change",
            payload: {
                name: e.target.name,
                value: e.target.value,
            },
        });
    }

    return (
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>Name : </label>
                    <input type="text" name='name' value={state.form.name} onChange={handleChange} placeholder='Enter Your Name...' />
                    <label>Email : </label>
                    <input type="email" name='email' value={state.form.email} onChange={handleChange} placeholder='Enter Your Email...' />
                    <label>Password : </label>
                    <input type='password' name='password' value={state.form.password} onChange={handleChange} placeholder='Enter Your Password...' />
                    <label>Phone Number : </label>
                    <input type='tel' name='phone' value={state.form.phone} onChange={handleChange} placeholder='Enter Your Phone Number...' />
                    <label>Gender : </label>
                    <select name="gender" value={state.form.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <button>Submit</button>
                    <button type='button' onClick={() => {
                        dispatch({
                            type: "reset"
                        })
                    }}>Reset</button>
                </form>
            </section>
        </div >
    )
}

export default Goal2
