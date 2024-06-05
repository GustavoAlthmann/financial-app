export default function Label(props) {
    return (
        <label {...props}  className={` ${props.className} text-gray-700 block dark:text-gray-300 block mb-1`}></label>
    )
}