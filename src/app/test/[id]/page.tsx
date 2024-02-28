
const hello = 'hi'

type TestPageProps = {
    params: {
        id: string
    }
}

export default function TestId({ params }: TestPageProps) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            text with id {params.id}
        </main>
    );
}