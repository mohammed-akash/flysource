// cryptoHelper.ts
'use client'
import { useToast } from "@chakra-ui/react";
const useMyToast = () => {
    const toast = useToast();
    console.log(toast);
    const newToast = (title: string, status: 'success' | 'error' | 'warning' | 'info', description?: string) => {
        console.log(title, status, description);
        toast({
            title,
            description,
            status,
            position: "top",
            duration: 1000,
        });
    };

    return newToast;
};

export default useMyToast;
