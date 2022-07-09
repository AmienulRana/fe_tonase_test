export default function FormatDate({ date }){
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return new Date(date).toLocaleDateString("id-ID", options);
}