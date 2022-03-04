import { Input } from './components/Input';
import { useInputMask } from './hooks/useInputMask';

export const App = () => {
  const { ref: charRef, onKeyUp: onKeyUpChar } = useInputMask('aaa-aaa-aaa');
  const { ref: numberRef, onKeyUp: onKeyUpNumber } =
    useInputMask('999-999-999');
  return (
    <div className="flex flex-col p-4 min-h-screen">
      <main className="flex flex-col grow flex-1 items-center justify-center ">
        <h1 className="flex uppercase text-2xl font-semibold mb-5">
          <a
            href="https://github.com/cicerohen/playground-reactjs-input-mask"
            title="View it on Github"
          >
            Playground ReactJS Input Mask
          </a>
        </h1>

        <div className="mb-4">
          <h2 className="mb-2 text-sm">Character mask</h2>
          <Input ref={charRef} onKeyUp={onKeyUpChar} />
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-sm">Number mask</h2>
          <Input ref={numberRef} onKeyUp={onKeyUpNumber} />
        </div>
        <p className="text-sm mt-4 text-gray-600">
          <a href="https://github.com/cicerohen/playground-reactjs-input-mask">
            View it on Github
          </a>
        </p>
      </main>
    </div>
  );
};
