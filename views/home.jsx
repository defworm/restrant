const React = require ('react')
const Def = require ('./default')


function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className = "col-sm-12" src="/images/taco.jpg" alt= "Tacos" />
                    {/* views\public\images\taco.jpg */}
                    {/* <div>
                        Photo by <a href="https://unsplash.com/@edgarraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Castrejon</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div> */}
                </div>

                <a href="/places">
    <button className="btn-primary">Places Page</button>
</a>
            </main>
        </Def>
    )
}


module.exports = home