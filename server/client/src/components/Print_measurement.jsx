import React from 'react'

const Print_measurement = React.forwardRef(({ shirtMeasurement, pentMeasurement, customerData }, ref) => {
    const isShirtDataAvailable = () => {
        const {
            s_length,
            shoulder,
            sleeve,
            sleeve1,
            sleeve2,
            chest,
            chest1,
            chest2,
            front,
            front1,
            front2,
            coller,
            cuff,
            extra_s,
        } = shirtMeasurement;

        return (
            s_length !== "" &&
            shoulder !== "" &&
            (sleeve !== "" || sleeve1 !== "" || sleeve2 !== "") &&
            (chest !== "" || chest1 !== "" || chest2 !== "") &&
            (front !== "" || front1 !== "" || front2 !== "") &&
            coller !== "" &&
            cuff !== "" &&
            extra_s.length > 0
        )
    };

    const isPentDataAvailable = () => {
        const {
            weist,
            p_length,
            hip,
            round,
            thigh,
            knee,
            knee1,
            knee2,
            bottom,
            extra_p,
        } = pentMeasurement;

        return (
            weist !== "" &&
            p_length !== "" &&
            hip !== "" &&
            round !== "" &&
            thigh !== "" &&
            (knee !== "" || knee1 !== "" || knee2 !== "") &&
            bottom !== "" &&
            extra_p.length > 0
        )
    };
    return (
        <div ref={ref}>
            <section className="content mt-3">
                <div className="container-fluid pb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-primary">
                                <div className="card-body border border-dark">
                                    <b>Name :</b>
                                    <span className='ml-2 mr-4'>{customerData.name}</span>

                                    <b>Bill No :</b>
                                    <span className='ml-2'>{customerData.bill_nu}</span>

                                    <div className="row">
                                        {isShirtDataAvailable() && (
                                            <div className="col lg-6">
                                                <b>Shirt</b>
                                                <table className="table table-bordered table-hover   responsive">
                                                    <thead>
                                                        <tr>
                                                            <th>લંબાઈ :</th>
                                                            <th>શોલ્ડર :</th>
                                                            <th>સ્લીવ :</th>
                                                            <th>છાતી :</th>
                                                            <th>ફ્રન્ટ :</th>
                                                            <th>કોલર :</th>
                                                            <th>કફ :</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{shirtMeasurement.s_length ?? ""}</td>
                                                            <td>{shirtMeasurement.shoulder ?? ""}</td>
                                                            <td>{(shirtMeasurement.sleeve ?? "") + ", " + (shirtMeasurement.sleeve1 ?? "") + ", " + (shirtMeasurement.sleeve2 ?? "")}</td>
                                                            <td>{(shirtMeasurement.chest ?? "") + ", " + (shirtMeasurement.chest1 ?? "") + "," + (shirtMeasurement.chest2 ?? "")}</td>
                                                            <td>{(shirtMeasurement.front ?? "") + ", " + (shirtMeasurement.front1 ?? "") + ", " + (shirtMeasurement.front2 ?? "")}</td>
                                                            <td>{shirtMeasurement.coller ?? ""}</td>
                                                            <td>{shirtMeasurement.cuff ?? ""}</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>Other :</td>
                                                        <td>{shirtMeasurement.extra_s.join(" , ")}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        )}

                                        {isPentDataAvailable() && (
                                            <div className="col lg-6">
                                                <b>Pent</b>
                                                <table className="table table-bordered table-hover responsive">
                                                    <thead>
                                                        <tr>
                                                            <th>કમર :</th>
                                                            <th>લંબાઈ :</th>
                                                            <th>સીટ :</th>
                                                            <th>રાઉન્ડ :</th>
                                                            <th>જાંઘ :</th>
                                                            <th>ઘૂંટણ :</th>
                                                            <th>બોટમ :</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{pentMeasurement.weist ?? ""}</td>
                                                            <td>{pentMeasurement.p_length ?? ""}</td>
                                                            <td>{pentMeasurement.hip ?? ""}</td>
                                                            <td>{pentMeasurement.round ?? ""}</td>
                                                            <td>{pentMeasurement.thigh ?? ""}</td>
                                                            <td>{(pentMeasurement.knee ?? "") + ", " + (pentMeasurement.knee1 ?? "") + ", " + (pentMeasurement.knee2 ?? "")}</td>
                                                            <td>{pentMeasurement.bottom ?? ""}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table>
                                                    <tr>
                                                        <td>Other :</td>
                                                        <td>{pentMeasurement.extra_p.join(" , ")}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
})

export default Print_measurement
