function Details(props) {

    const id = props.id
    const notes = props.notes
    let note = notes.filter(note => note.id === id)


    function compute() {
        props.onEdit(props.id);
    }

    return (
        <div className={"detail-page"}>
            <h1>{note.title} Titre</h1>
            <p>{note.content}

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis rhoncus erat, sed gravida risus.
                Integer accumsan auctor facilisis. Aliquam nec justo non ante tempor scelerisque sed nec lectus.
                Suspendisse pharetra tellus ac velit ornare imperdiet. Integer consectetur ligula nec odio fermentum
                sodales. Duis non ante at magna varius commodo dapibus sed mauris. Vestibulum nibh risus, rutrum id
                sagittis eget, ullamcorper et sapien. Curabitur volutpat tellus sed erat cursus faucibus. In tempor
                tortor sed magna feugiat porttitor. Pellentesque accumsan elit dapibus semper ultricies. Integer iaculis
                libero mi, in mollis erat cursus ut. Etiam dictum, velit nec imperdiet sodales, leo arcu finibus sapien,
                pulvinar tincidunt ex neque vel nibh.

                Maecenas at mi lectus. Sed sagittis lorem ut cursus semper. Donec sodales, arcu sit amet rutrum porta,
                massa nunc consequat ante, in fermentum eros libero quis odio. Fusce pulvinar dictum nisi, vel elementum
                nibh scelerisque ac. Aenean volutpat, libero vitae varius ornare, massa neque laoreet augue, et
                vestibulum magna leo vitae lectus. Nunc interdum ante et varius congue. Cras turpis nunc, sollicitudin
                sed odio vel, tincidunt laoreet ligula. Nunc placerat dictum porttitor. Sed ac sollicitudin massa, id
                aliquet felis. Donec dignissim congue orci, sed egestas augue sagittis quis. Morbi semper nisi at velit
                egestas gravida. Nam interdum leo id vehicula dapibus. Phasellus tincidunt finibus mauris a ullamcorper.
                Maecenas venenatis neque at odio tincidunt, pulvinar fringilla nulla euismod. Pellentesque luctus odio
                ac sollicitudin scelerisque. Donec elementum, odio quis malesuada ullamcorper, ex risus feugiat quam,
                nec semper tellus mi vitae enim.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. In et urna ut nibh faucibus maximus.
                Mauris id rhoncus libero, sit amet rutrum dolor. Phasellus quis diam velit. Pellentesque dolor ante,
                convallis vel nibh eget, pulvinar viverra urna. Maecenas sit amet tellus fringilla urna hendrerit
                accumsan quis nec nunc. Pellentesque lectus nunc, porta quis turpis id, luctus finibus metus.

                Nulla neque sem, tempus sed leo bibendum, accumsan dignissim nisi. Nulla tempus quam sed ante consequat,
                pulvinar facilisis sem vulputate. Morbi facilisis, eros sed egestas finibus, nibh diam malesuada lorem,
                sit amet molestie arcu ex vitae justo. Etiam quis diam eget eros malesuada bibendum. Nunc tristique
                elementum ex a aliquam. Sed dapibus mi non ante pellentesque, et porttitor dui scelerisque. Donec dolor
                risus, ullamcorper non vestibulum eu, consectetur et tortor.

                Vivamus vel sollicitudin diam, mattis sodales magna. Phasellus euismod velit eu lacus convallis
                consectetur. Nulla ac ligula quis odio elementum venenatis. Duis facilisis, turpis ac mollis interdum,
                purus turpis pharetra odio, sit amet mollis ligula justo in diam. Nulla condimentum nisl vitae ligula
                lacinia, nec lobortis lacus tempor. Nam arcu turpis, mattis sit amet blandit in, fringilla non elit.
                Etiam rutrum sed tellus vitae facilisis. Suspendisse pretium dictum maximus. Duis vitae augue erat. Nam
                viverra dignissim felis, et hendrerit turpis iaculis a. Etiam ornare, velit pharetra consequat vehicula,
                massa magna hendrerit neque, nec aliquam sapien metus nec est. Nullam congue ligula sed lectus aliquam
                mollis non vitae purus. In arcu massa, accumsan at erat sollicitudin, pulvinar vulputate metus. </p>
            <p className={"detail-author"}>{note.author}Auteur</p>
            <a href="/editnote">
                <button className={"btn-edit"} onClick={compute}>Edit</button>
            </a>
        </div>
    )
}

export default Details;