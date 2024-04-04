(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public placeholder: string,
            public value: string,
        ) {}
    }

    class InputEvents{
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    //? Idea para la nueva clase InputElement

    class InputElement{
        public html: HtmlElement;
        public events: InputEvents;
        public attributes: InputAttributes;

        constructor(
            value: string,
            placeholder: string,
            id: string
        ){
            this.html =  new HtmlElement( id, 'input' );
            this.events =  new InputEvents();
            this.attributes =  new InputAttributes( value, placeholder );
        }
    }



    const nameField = new InputElement( 'Fernando6','Enter first name', 'txtName');

    console.log( nameField );

})()