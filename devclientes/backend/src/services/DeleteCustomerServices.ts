
import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerServices {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error("Solicitação inválida");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        });

        if (!findCustomer) {
            throw new Error("Cliente não existe!");
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        });

        return { message: "Cliente deletado com sucesso!" };
    }
}

export { DeleteCustomerServices };
