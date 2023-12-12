import './container.css'
export default function Container({children}) {
    return <div className="max-width">
        <div className="pad">
            {children}
        </div>
    </div>
}