// String utilities module
// This file contains string manipulation functions that can be imported by other files

export function capitalize(text: string): string {
    if (!text) return text
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export function reverse(text: string): string {
    return text.split("").reverse().join("")
}

export function countWords(text: string): number {
    const trimmed = text.trim()
    if (trimmed === "") return 0 // handle empty or whitespace-only strings
    return trimmed.split(/\s+/).length
}

export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
}

export function removeSpaces(text: string): string {
    return text.replace(/\s/g, "")
}

export function isPalindrome(text: string): boolean {
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "")
    return cleanText === cleanText.split("").reverse().join("")
}
