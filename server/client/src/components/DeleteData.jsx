import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function DeleteData({ showDelete, closeDelete, DelWorker, selectedId }) {
    const handleDelete = () => {

        const apiEndpoint = DelWorker
            ? `/worker/delete_worker/${selectedId}`
            : `/customer/delete_customer/${selectedId}`

        axios.delete(apiEndpoint, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                toast.success('Data deleted succesfully !', {
                    autoClose: 5000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                })
                closeDelete()
            })
            .catch(function (error) {
                toast.error("Failed to delete data !", {
                    autoClose: 5000,
                    style: {
                        backgroundColor: 'black',
                        color: 'white',
                    },
                });
                closeDelete()
            });
    };
    const confirmationMessage = DelWorker ? "Are you sure you want to delete this worker? Deleting a worker will also delete other releted data of worker." : "Are you sure you want to delete this customer? Deleting a customer will also delete other associated data.";
    return (
        <div>
            <Modal
                show={showDelete}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {confirmationMessage}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    <Button variant="secondary" onClick={closeDelete}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
