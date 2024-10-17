import tata from "../../assets/tata.png";
import bas from "../../assets/bas.png";
import joacamar from "../../assets/joacamar.png";
import woow from "../../assets/woow.png";
import tiendainglesa from "../../assets/tiendainglesa.png";

export const TrustUs = () => {
    return (
        <section class="pb-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mb-14 text-center">
                    <h4 class="text-center font-medium">
                        Clientes de todos los tamaños confian en nosotros
                    </h4>
                </div>
                <div class="grid grid-cols-2 justify-items-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
                    <img
                        src={tata}
                        className="w-[120px] grayscale opacity-60"
                        alt="marca"
                    />
                    <img
                        src={bas}
                        className="w-[120px] grayscale opacity-60"
                        alt="marca"
                    />
                    <img
                        src={joacamar}
                        className="w-[120px] grayscale opacity-60"
                        alt="marca"
                    />
                    <img
                        src={woow}
                        className="w-[120px] grayscale opacity-60"
                        alt="marca"
                    />
                    <img
                        src={tiendainglesa}
                        className="w-[120px] grayscale opacity-60"
                        alt="marca"
                    />
                </div>
            </div>
        </section>
    );
};
