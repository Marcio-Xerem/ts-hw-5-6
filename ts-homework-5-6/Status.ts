type Status = 'ativo' | 'inativo' | 'pendente' | 'bloqueado';

export function getStatusMessage(status: Status): string {
    switch (status) {
        case "ativo":
            return 'O usuário está ativo.'
        case "inativo":
            return 'O usuário está inativo.'
        case "pendente":
            return 'O status do usuário é pendente.'
        case "bloqueado":
            return 'O status do usuário é bloqueado.'        
    }
}