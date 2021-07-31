import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setCount] = useState(3);
    const history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000)
        // redirect
        count === 0 && history.push('/');
        return () => clearInterval(interval)
    }, [count, history])

    return (
        <div className="container p-5 text-center">
            <p>Redirect in {count} second</p>
        </div>
    )
}
export default LoadingToRedirect
