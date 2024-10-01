import React from 'react'

function Card(
    // props
    // Or
    {name = "Rahul"}
) {
  return (
    <div>
        <div className="rate mb-2 w-96 h-72 bg-white py-6 px-6 rounded-md flex flex-col justify-between">

            <div className="stars flex gap-2">
                <i className="bi bi-star text-2xl text-slate-800"></i>
                <i className="bi bi-star text-2xl text-slate-800"></i>
                <i className="bi bi-star text-2xl text-slate-800"></i>
                <i className="bi bi-star text-2xl text-slate-800"></i>
                <i className="bi bi-star text-2xl text-slate-800"></i>
            </div>


            <div className="rate-content flex gap-2 flex-col justify-center items-start">

                <h1 className="text-2xl font-bold tracking-wider capitalize">
                    Review title
                </h1>

                <p className="font-light tracking-widest">
                    &#x201F there is no word can refer to this platfform ,it’s very helpfull to who’s love to be the futur builder &#x201F
                </p>

            </div>

            <div className="rater-info mb-2 flex gap-2 items-center">

                <div className="avatar w-12 h-12 shadow rounded-full overflow-hidden">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSugC5bvVZjZwI4zQTUk9KRJF8Pfw4ePLXQ1uKhX0QaeptdJg5RwIct3JvOnOajfiH4nKGPZx5LzIyLUjzmmRZB4Nm2RHWE2o51VHLEg" className="object-cover w-full h-full" alt=""/>
                </div>

                <div className="flex-1 flex justify-around flex-col">
                    <h1 className="font-bold text-lg tracking-wide">
                        {name || "Default value 2"}
                    </h1>
                    <span className="font-light text-sm text-slate-500">
                        University Teacher
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
