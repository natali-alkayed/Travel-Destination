import './Tours.css'
function Tours (props){
    return (
        <>
            <h2>Tours list</h2>
            {
                props.arrayData.map((item, i) => {
                    return (
                        <div key={i}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} />
                        </div>
                    )
                })
            }
        </>
    )
}
export default Tours;