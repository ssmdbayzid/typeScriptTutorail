export interface IsPlayer {
    name: string;    
    country: string;
    play(): void;
    getProperty():number;
}

// here we get private property by calling getProperty