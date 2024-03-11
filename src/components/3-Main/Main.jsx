import './main.css'
import Card from "./Card/Card"

export default function Main() {
    return (
        <section className="projects-section">
            <h1>Check some of my Projects</h1>
            <div className="cards-container">
                <Card
                    className="card"
                />
                <Card
                    className="card"
                />
                <Card
                    className="card"
                />
                <Card
                    className="card"
                />
                <Card
                    className="card"
                />
                <Card
                    className="card"
                />
            </div>
        </section>
    )
}
