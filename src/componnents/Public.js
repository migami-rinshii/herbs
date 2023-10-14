import { Link } from "react-router-dom";

const Public = () => {
const content = (
<section className="public">
    <header>
        <logo>
        <h1>Herbs Med.</h1>
        </logo>
    </header>
    <main>
        <hero>
            <article>
              <br></br>
              <h1>Herbal Medicine</h1>
              <h6>and</h6>
              <h3>Health Benefits</h3>
            </article>
            <br></br>
            <cta>
        <Link to="/login">Login</Link>
            </cta>

        </hero>
    </main>
    <footer>
        <p>Copyright 2023</p>
    </footer>
</section>
)

return content
}

export default Public