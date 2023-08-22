import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default async function Toast(_status) {
    const duration = { autoClose: 2500, position: "bottom-left", }
    _status ? toast.success('successful', duration) : toast.error('failed', duration)
}