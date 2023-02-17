export default function RecipeCard({title, ingress}){
    return(
        <article>
            <h3>{title}</h3>
            <p>{ingress}</p>
        </article>
    )
}