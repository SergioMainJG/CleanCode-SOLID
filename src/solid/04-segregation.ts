interface Bird {
    comer(): void;
}

interface FlyingBird{
    fly(): void;
}

interface RunningBird{
    run(): void;
}

interface SwimingBird{
    swim(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){};
    public comer(){};
}

class Humminbird implements Bird, FlyingBird{
    public fly(){};
    public comer(){};
}

class Districh implements Bird, RunningBird{
    public comer(){};
    public run(){};
}

class Penguin implements Bird, RunningBird, SwimingBird{
    public comer(){};
    public run(){};
    public swim(){};
}