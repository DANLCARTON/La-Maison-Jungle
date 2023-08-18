const Recommendation = () => {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    if (isSpring) return <div>C'est le printemps, rempotez !</div>
    else return <div>Ce n'est pas le moment de rempoter.</div>
}

export default Recommendation