const rawEmails: string[] = ["  Alice@Example.com ", "bob@example.com ", "  BOB@EXAMPLE.COM"]

function normalize(email: string[]): string[] {
    const normalized: string[] = []
    for (let i = 0; i < email.length; i++) {
        const trimmed = email[i].trim()
        const lower = trimmed.toLowerCase()
        normalized.push(lower)
    }
    return normalized
}

console.log("Normalized:", normalize(rawEmails))

export {}
