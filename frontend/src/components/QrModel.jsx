import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function QrModel({ showModel, closeModel }) {
    return (
        <>
            <Modal show={showModel} onHide={closeModel} centered>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModel}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default QrModel;