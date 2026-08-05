import ProfileCard from "./ProfileCard"
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"

const profile = {
    name: "Faizan",
    role: "Manager",
    avatarUrl: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    bio: "I am Manager",
    isOnline: true
}

it('renders name prop in a heading', () => {
    render(<ProfileCard profile={profile} />)
    const h1 = screen.getByRole("heading", {
        name: /user name : faizan/i
    })
    expect(h1).toBeInTheDocument()
})

it('renders role in subtitle', () => {
    render(<ProfileCard profile={profile} />)
    const h2 = screen.getByRole("heading", {
        name: /user role : manager/i
    })
    expect(h2).toBeInTheDocument()
})

if (profile.isOnline) {
    it('shows Online when isOnline is true', () => {
        render(<ProfileCard profile={profile} />)
        const h3 = screen.getByText("Online")
        expect(h3).toBeInTheDocument()
    })
}
else {
    it('shows Offline when isOnline is false', () => {
        render(<ProfileCard profile={profile} />)
        const h3 = screen.getByText("Offline")
        expect(h3).toBeInTheDocument()
    })
}

if (!profile.bio) {
    it('does not render bio when bio is undefined', () => {
        render(<ProfileCard profile={profile} />)
        const p = screen.queryByText(/user bio/i)
        expect(p).not.toBeInTheDocument()
    })
}
else {
    it('render bio when bio is not undefined', () => {
        render(<ProfileCard profile={profile} />)
        const p = screen.queryByText(/user bio : i am manager/i)
        expect(p).toBeInTheDocument()
    })
}