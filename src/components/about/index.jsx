import { Separator } from "../separator";
import "./styles.css";

export const About = () => {
    return (
        <>
            <div className="section about">
                <h2>Sobre mi</h2>

                <p>
                    Cuando no estoy programando lo mas probable es que este
                    trotando, comiendo o duermiendo, pero, por lo general
                    siempre estoy programando.
                    <br />
                    Me gustan los retos, por ejemplo programar, trotar, comer y
                    dormir el mismo dia 😅
                </p>
            </div>
            <Separator />
        </>
    );
};
