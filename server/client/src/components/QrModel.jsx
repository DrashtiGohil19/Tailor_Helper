import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QRCode from 'qrcode.react';

function QrModel({ showModel, closeModel }) {
    const billDetails = {
        customerName: 'John Doe',
        billNumber: '123456',
    };
    return (
        <>
            <Modal show={showModel} onHide={closeModel} centered>
                <Modal.Body className='m-auto'>
                    <QRCode value={JSON.stringify(billDetails)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='m-auto' onClick={closeModel}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default QrModel;