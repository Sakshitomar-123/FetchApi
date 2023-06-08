import logo from './logo.svg';
import './App.css';
import FetchData from './Component/FetchData';
import { useState } from 'react';
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddUser from './Component/AddUser';
function App() {
  const style={content: {
    inset:'40px 30px 20px 420px',
    border: '2px solid black',
    backgroundsize: 'cover',
    backgorundColor:'black',
    background: '#6c757d',
    borderRadius: '4px',
    bottom: 'auto',
    left: '20%',
    padding: '2rem',
    position: 'fixed',
    top: '0%', // start from center
    width: '35%',
    maxWidth: '75%',
    left: '50%'
  }
}
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
  return (
    <div className="App">
      <div className='container'>
      <button onClick={openModal}>Add User</button>

<Modal isOpen={isModalOpen} onRequestClose={closeModal} style={style}>
<svg className="close" width="14" height="14" xmlns="http://www.w3.org/2000/svg" onClick={closeModal}>
            <path
              d="M7 5.445 12.445 0 14 1.555 8.555 7 14 12.445 12.445 14 7 8.555 1.555 14 0 12.445 5.445 7 0 1.555 1.555 0z"
              fill="#222"
              fillRule="nonzero"
            ></path>
          </svg>
  <AddUser onClose={closeModal} />
</Modal>
      <FetchData />
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
