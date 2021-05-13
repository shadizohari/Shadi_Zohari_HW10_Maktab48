function ShowBox({ result, ...props }) {
    return (

        < div className="entrybox" >
            <div className="entry">
                <p className="answer">{result}</p>
            </div>
        </div >

    );
}

export default ShowBox;