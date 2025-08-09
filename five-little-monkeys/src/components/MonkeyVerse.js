export default function MonkeyVerse() {
    const text = 
    monkeys > 0
        ? `${monkeys} little monkey${monkeys > 1 ? "s" : ""} jumping on the bed,`
        : "No more monkeys jumping on the bed!";
    const nextLine = monkeys > 0 `One fell off and bumped his head. : `
        `Mama called the doctor and the doctor said...`;
    return(
        <div>
            <p className="verse">{text}</p>
            <p className="small">{nextLine}</p>
        </div>
    )
}