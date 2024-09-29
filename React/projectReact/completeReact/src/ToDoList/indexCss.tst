@tailwind base;
@tailwind components;
@tailwind utilities;


@keyframes move-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50px); /* Adjust for the desired movement distance */
    }
  }
  
  @keyframes move-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50px); /* Adjust for the desired movement distance */
    }
  }
  
  .move-up {
    animation: move-up 1s forwards;
  }
  
  .move-down {
    animation: move-down 1s forwards;
  }