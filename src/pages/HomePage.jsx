import { Link } from "react-router-dom";
import imgbeer from "../assets/beers.png";
import imgranbeer from "../assets/random-beer.png";
import imgnewbeer from "../assets/new-beer.png";

export default function HomePage() {
    return (
        <div>
            <div>
                <section>
                    <img src={imgbeer} alt="beers" />
                </section>
                <Link to="/beers"> See All Beers Here </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cum ut repudiandae maxime, corrupti, excepturi repellat ipsum natus officia dicta consequuntur nam. Perspiciatis harum, dolor distinctio in dolores atque tenetur?.
                </p>
                <hr />
            </div>
            <div>
                <section>
                    <img src={imgranbeer} alt="random beer" />
                </section>
                <Link to="/random-beer">Select a Random Beer</Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat quod maiores? Tempora aperiam quos ab dolores soluta sint eaque, ipsa vitae. Mollitia rerum quisquam aperiam praesentium expedita perferendis officiis!
                </p>
                <hr />
            </div>
            <div>
                <section>
                    <img src={imgnewbeer} alt="random beer" />
                </section>
                <Link to="/new-beer">New Beer</Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nesciunt cum ex nulla iste id minima iusto quibusdam reprehenderit. Est laudantium nihil minima neque ratione labore ut harum in veritatis.
                </p>
                <hr />
            </div>
        </div>
    );
}