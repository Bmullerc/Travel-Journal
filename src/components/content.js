import Card from "./card"
import travel from "./travel"

export default function Content() {
    const cards = travel.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <section className="content--container">
            {cards}
        </section>
    )
}