export const ehTriangulo = (A: number, B: number, C: number) => {
    if(A + B >= C){
        return true;
    }
    if(A + C >= B){
        return true;
    }
    if(B + C >= A){
        return true;
    }
    return false;
}