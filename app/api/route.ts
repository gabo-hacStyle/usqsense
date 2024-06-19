import { NextResponse } from "next/server";
import { getMotos } from "../../services/motos";

export async function GET(res: NextResponse) {
    try {
        const movies = await getMotos();

        return NextResponse.json({movies});
        
    } catch (error: any) {
        throw new Error(error.message);
        
    } 
}