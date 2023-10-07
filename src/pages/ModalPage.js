import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal actionBar={actionBar} onClose={handleClose}>
      This is some important text you're being forced to read here
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isOpen && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        pretium nec purus ut dapibus. Sed non placerat mi, nec lobortis nisi.
        Fusce nec maximus orci. Nulla quis tempor ligula. Mauris sagittis urna
        sit amet velit sagittis mattis. Nulla lacinia dolor vitae efficitur
        gravida. Vestibulum eget luctus tortor, non imperdiet metus. Mauris
        fermentum accumsan neque ut consectetur. Nullam sit amet purus vel nisl
        aliquet mattis. Sed at condimentum ante. Pellentesque volutpat erat
        nisl, id consectetur sem pharetra quis. Suspendisse consequat volutpat
        nisl, a blandit tellus volutpat at. Pellentesque augue ex, venenatis
        eget massa sed, ullamcorper congue tortor. Praesent sit amet porttitor
        odio. Vestibulum massa justo, rhoncus sed interdum at, consequat non
        mauris. Aenean nec arcu ante. Vestibulum vel magna tincidunt, iaculis
        diam vitae, efficitur enim. Suspendisse pellentesque orci eu consectetur
        iaculis. Morbi ac ex non ex suscipit elementum. Integer vitae euismod
        nisi. Morbi et ipsum quis erat pellentesque bibendum ac et leo.
        Vestibulum nec leo quis justo vulputate euismod. Curabitur non malesuada
        lectus. Maecenas eget ex id sapien elementum pretium. Nullam ut
        tincidunt metus, et malesuada tortor. Morbi sit amet felis vitae diam
        mattis aliquet. Integer pellentesque malesuada ligula quis porta.
        Vivamus metus libero, volutpat sed enim vitae, volutpat vestibulum mi.
        Ut eget dictum risus. Fusce nulla quam, ornare vitae viverra sed,
        scelerisque at turpis. Aliquam at tempor justo. Phasellus varius, enim
        sed ullamcorper semper, nulla dolor placerat justo, non ullamcorper nisi
        arcu vel neque. Phasellus vulputate elit ac metus malesuada efficitur.
        Nunc blandit, purus vitae aliquet finibus, nisi odio tincidunt risus,
        rutrum tincidunt eros sapien at velit. Cras porttitor molestie urna,
        efficitur rhoncus urna aliquet id. Nullam ac ligula nibh. Pellentesque
        eu nunc augue. Fusce finibus nibh eu nisl tristique imperdiet. Mauris
        elementum in lorem fermentum pretium. Maecenas ac ullamcorper sem.
        Aenean ornare felis non congue viverra. Curabitur volutpat venenatis mi
        id iaculis. Proin in arcu magna. Vestibulum eu scelerisque velit.
        Maecenas euismod neque ac justo fermentum, vitae blandit nisl commodo.
        Duis volutpat sem ut est lacinia consectetur. Phasellus varius justo at
        sapien dignissim, vitae lobortis ex condimentum. In varius dui non
        ligula ornare posuere. Donec tincidunt purus dolor, vitae ullamcorper
        felis congue quis. Vestibulum quis turpis faucibus, gravida metus at,
        tincidunt tortor. Nam pellentesque tincidunt urna eget vestibulum.
        Phasellus id libero feugiat nisi eleifend posuere. In nec neque vitae
        eros rhoncus imperdiet. Curabitur euismod, lorem id tristique
        condimentum, ante ante dapibus odio, non elementum elit arcu id enim.
        Cras nisi tellus, ultricies id quam fringilla, congue tempus arcu.
        Vestibulum interdum consequat neque consectetur ullamcorper. Mauris eu
        elit imperdiet sem tincidunt sodales. Nunc congue mi a interdum
        facilisis. In vehicula ipsum sit amet lacinia viverra. In malesuada,
        odio at blandit molestie, nunc justo semper nisi, tempus pharetra massa
        arcu vitae est.
      </p>
    </div>
  );
}

export default ModalPage;
