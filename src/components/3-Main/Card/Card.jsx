export default function Card({ title, des, img, link, github, ...restPropss }) {
    return (
        <article {...restPropss}>
            <img src="./1.jpg" alt="" />
            <div className="box">
                <h3>landing pag2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias pariatur soluta! Facilis, nemo? Neque quas atque omnis enim possimus. Reiciendis sit voluptatum op.</p>
                <div className="links flex">
                    <div>
                        <a href="#"><span className="icon icon-link"></span></a>
                        <a href="#"><span className="icon icon-github"></span></a>
                    </div>
                    <a href="https://github.com/MohamedZakidev">More<span className="icon icon-arrow-right"></span></a>
                </div>
            </div>
        </article>
    )
}
