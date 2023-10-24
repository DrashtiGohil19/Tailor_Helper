import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Update_Map(api) {

    const [val, setVal] = useState({
        extra_p: [],
        weist: "",
        p_length: "",
        hip: "",
        round: "",
        thigh: "",
        knee: "",
        knee1:"",
        knee2:"",
        bottom: "",

        extra_s: [],
        s_length: "",
        shoulder: "",
        sleeve: "",
        sleeve1:"",
        sleeve2:"",
        chest: "",
        chest1:"",
        chest2:"",
        front: "",
        front1:"",
        front2:"",
        coller: "",
        cuff: ""
    })
    const params = useParams();

    const handleChange = (e, fieldName, index) => {
        const { name, value, checked, type } = e.target
        const { extra_p, extra_s } = val;

        if (type === 'checkbox') {
            if (checked) {
                if (e.target.name === 'extra_p') {
                    setVal({ ...val, extra_p: [...extra_p, value] });
                } else if (e.target.name === 'extra_s') {
                    setVal({ ...val, extra_s: [...extra_s, value] });
                }
            } else {
                if (e.target.name === 'extra_p') {
                    setVal({ ...val, extra_p: extra_p.filter((e) => e !== value) });
                } else if (e.target.name === 'extra_s') {
                    setVal({ ...val, extra_s: extra_s.filter((e) => e !== value) });
                }
            }
        } else {
            setVal((prevVal) => ({
                ...prevVal,
                [name]: value,
            }));
        }
    }


const isExtraSelected = (option) => {
    return val.extra_p.includes(option) || val.extra_s.includes(option);
};

const viewData = () => {
    axios.get(`http://localhost:5000/measurement/view_measurement?customer_id=${params.id}`)
        .then(function (response) {
            console.log(response);
            const responseData = response.data.data;
            if (responseData.pent_id) {
                setVal(prevVal => ({
                    ...prevVal, ...responseData.pent_id,
                    extra_p: responseData.pent_id.extra_p || [],
                }));
            }
            if (responseData.shirt_id) {
                setVal(prevVal => ({ ...prevVal, ...responseData.shirt_id,
                    extra_s: responseData.shirt_id.extra_s || [] }));
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

useEffect(() => {
    viewData()
}, [params.id])

const handleUpdate = () => {
    axios.put(`http://localhost:5000/measurement/update_map/${params.id}`, {
        extra_p: val.extra_p,
        weist: val.weist,
        p_length: val.p_length,
        hip: val.hip,
        round: val.round,
        thigh: val.thigh,
        knee: val.knee,
        knee1:val.knee1,
        knee2:val.knee2,
        bottom: val.bottom,

        extra_s: val.extra_s,
        s_length: val.s_length,
        shoulder: val.shoulder,
        sleeve: val.sleeve,
        sleeve1:val.sleeve1,
        sleeve2:val.sleeve2,
        chest: val.chest,
        chest1:val.chest1,
        chest2:val.chest2,
        front: val.front,
        front1:val.front1,
        front2:val.front2,
        coller: val.coller,
        cuff: val.cuff,
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}

return (
    <div>
        <Sidebar />
        <Topbar />
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Update Measurement </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Update Measurement</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content measurement">
                <div className="container-fluid">
                    {/* ====================== measurement ==================== */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Pent Measurement</h3>
                                </div>

                                <form>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <div className="row extp">
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="સાઈડ પોકેટ" checked={isExtraSelected("સાઈડ પોકેટ")} onChange={handleChange} />
                                                        <label>સાઈડ પોકેટ</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="ક્રોસ પોકેટ" checked={isExtraSelected("ક્રોસ પોકેટ")} onChange={handleChange} />
                                                        <label>ક્રોસ પોકેટ</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="હાથ સિલાઈ" checked={isExtraSelected("હાથ સિલાઈ")} onChange={handleChange} />
                                                        <label>હાથ સિલાઈ</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="ગ્રીપ" checked={isExtraSelected("ગ્રીપ")} onChange={handleChange} />
                                                        <label>ગ્રીપ</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="પાછળ પોકેટ" checked={isExtraSelected("પાછળ પોકેટ")} onChange={handleChange} />
                                                        <label>પાછળ પોકેટ</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="સિંગલ ચીપટી" checked={isExtraSelected("સિંગલ ચીપટી")} onChange={handleChange} />
                                                        <label>સિંગલ ચીપટી</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="ડબલ ચીપટી" checked={isExtraSelected("ડબલ ચીપટી")} onChange={handleChange} />
                                                        <label>ડબલ ચીપટી</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_p" value="બોક્સ ચીપટી" checked={isExtraSelected("બોક્સ ચીપટી")} onChange={handleChange} />
                                                        <label>બોક્સ ચીપટી</label>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* =================================================================== */}

                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>કમર :</label>
                                                    <input type="text" className="form-control" name="weist" value={val.weist} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>લંબાઈ :</label>
                                                    <input type="text" className="form-control" name="p_length" value={val.p_length} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>સીટ:</label>
                                                    <input type="text" className="form-control" name="hip" value={val.hip} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>રાઉન્ડ :</label>
                                                    <input type="text" className="form-control" name="round" value={val.round} onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>જાંઘ:</label>
                                                    <input type="text" className="form-control" name="thigh" value={val.thigh} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>ઘૂંટણ :</label>
                                                    {/* {val.knee.map((knee, index) => (
                                                        <input
                                                            key={index}
                                                            type="text"
                                                            className="form-control mb-2"
                                                            name={`knee${index}`}
                                                            value={knee}
                                                            onChange={handleChange}
                                                        />
                                                    ))} */}
                                                    <input type="text" className="form-control" name="knee" value={val.knee} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="knee1" value={val.knee1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="knee2" value={val.knee2} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>બોટમ:</label>
                                                    <input type="text" className="form-control" name="bottom" value={val.bottom} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* ============================================================= */}
                        <div className="col-md-12">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Shirt Measurement</h3>
                                </div>
                                <form>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_s" value="ઓપન" checked={isExtraSelected("ઓપન")} onChange={handleChange} />
                                                        <label>ઓપન</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_s" value="બુ-શર્ટ" checked={isExtraSelected("બુ-શર્ટ")} onChange={handleChange} />
                                                        <label>બુ-શર્ટ</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_s" value="ડાર્ટ" checked={isExtraSelected("ડાર્ટ")} onChange={handleChange} />
                                                        <label>ડાર્ટ</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_s" value="પોકેટ" checked={isExtraSelected("પોકેટ")} onChange={handleChange} />
                                                        <label>પોકેટ</label>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <input type="checkbox" className="m-1" name="extra_s" value="સ્ટેન્ડ કોલર" checked={isExtraSelected("સ્ટેન્ડ કોલર")} onChange={handleChange} />
                                                        <label>સ્ટેન્ડ કોલર</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>લંબાઈ :</label>
                                                    <input type="text" className="form-control" name="s_length" value={val.s_length} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>શોલ્ડર :</label>
                                                    <input type="text" className="form-control" name="shoulder" value={val.shoulder} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>સ્લીવ :</label>
                                                        {/* {val.sleeve.split(', ').map((sleeveValue, index) => (
                                                            <input
                                                                key={index}
                                                                type="text"
                                                                className="form-control mb-2"
                                                                name={`sleeve${index}`}
                                                                value={sleeveValue}
                                                                onChange={(e) => handleChange(e, 'sleeve', index)}
                                                            />
                                                        ))} */}
                                                        <input type="text" className="form-control" name="sleeve" value={val.sleeve} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="sleeve1" value={val.sleeve1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="sleeve2" value={val.sleeve2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>છાતી :</label>
                                                        {/* {val.chest.split(', ').map((chestValue, index) => (
                                                            <input
                                                                key={index}
                                                                type="text"
                                                                className="form-control mb-2"
                                                                name={`chest${index}`}
                                                                value={chestValue}
                                                                onChange={(e) => handleChange(e, 'chest', index)}
                                                            />
                                                        ))} */}
                                                        <input type="text" className="form-control" name="chest" value={val.chest} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="chest1" value={val.chest1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="chest2" value={val.chest2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="form-group">
                                                        <label>ફ્રન્ટ :</label>
                                                        {/* {val.front.split(', ').map((frontValue, index) => (
                                                            <input
                                                                key={index}
                                                                type="text"
                                                                className="form-control mb-2"
                                                                name={`front${index}`}
                                                                value={frontValue}
                                                                onChange={(e) => handleChange(e, 'front', index)}
                                                            />
                                                        ))} */}
                                                        <input type="text" className="form-control" name="front" value={val.front} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="front1" value={val.front1} onChange={handleChange} />
                                                        <input type="text" className="form-control mt-2" name="front2" value={val.front2} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>કોલર :</label>
                                                    <input type="text" className="form-control" name="coller" value={val.coller} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-group">
                                                    <label>કફ :</label>
                                                    <input type="text" className="form-control" name="cuff" value={val.cuff} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="row">
                        <div className="col-sm-6">
                            <button type="submit" className="btn btn-primary mr-3" onClick={handleUpdate}>Save</button>
                            <button type="submit" className="btn btn-primary mr-3">Print</button>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
)
}
