export default function CourseCard({ title, description, duration, onSelect, onFavourite}) {
    return (
        <div ClassName="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>duration:{duration}Weeks</h4>

            <button onClick={() => onSelect(title)}>Select</button>
            <button className="fav" onClick={() => onFavourite(title)}>Favourites</button>
            
        </div>

        
    )
}