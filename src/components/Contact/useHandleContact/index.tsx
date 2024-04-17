import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { ISubmitForm } from './props';
import { schema } from './schema';


export const useHandleContact = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    })

    function sendEmail(data: ISubmitForm) {
        const templateParams = {
            subject: data.subject,
            name: data.name,
            email: data.email,
            message: data.message
        }

        setLoading(true);
        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICEID,
            import.meta.env.VITE_EMAIL_TEMPLATEID, 
            templateParams, 
            import.meta.env.VITE_EMAIL_PUBLICKEY)
        .then(() => {
            toast.success('Mensagem enviada com sucesso!')
            setLoading(false);
            reset();
        })
        .catch((error) => {
            setLoading(false);
            toast.error(`Oops, parece que algo deu errado, ${error}`)
        })
    }

    function handleForm(data: ISubmitForm) {
        sendEmail(data);
    }

    return {
        register,
        errors,
        handleSubmit,
        handleForm,
        loading
    };
};