import { Contact1Content,Contact1Link,ContactH2, Contact1Link2,ContactForm,ContacName,ContactInput,ContactEmail,ContactInputMsm,ContacTitle} from "./style";

export  function Contact1(){

    return(
        
        <body>
               <Contact1Content>
                    <Contact1Link>Tagline</Contact1Link>
                    <ContactH2>Contact us</ContactH2>
                    <Contact1Link2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Contact1Link2>
                </Contact1Content>
                <ContactForm>
                    <ContacTitle>Name</ContacTitle>
                    <ContacName>
                         <ContactInput></ContactInput>
                    </ContacName>
                    
                    <ContacTitle>Email</ContacTitle>
                    <ContactEmail>
                        <ContactInput></ContactInput>

                    </ContactEmail>
                    <ContacTitle>Mensagem</ContacTitle>
                    <ContactInputMsm></ContactInputMsm>
                </ContactForm>
        </body>

    )


}