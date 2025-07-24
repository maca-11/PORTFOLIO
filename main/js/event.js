const containers = document.querySelectorAll('.work_container');

containers.forEach((container, index) => {
  const image = container.querySelector('img');
  const id = image.id;

  container.addEventListener("mouseenter", () => {
    clickScaleIn(id);
  });

  container.addEventListener("mouseleave", () => {
    clickScaleOut(id);
  });
});
function clickScaleIn(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(1.1)'}
    ],    
    {
      //タイミングオプション
      duration: 100,
      fill: "forwards"
    }
  );
}
function clickScaleOut(name) {
  const animation = document.getElementById(name).animate(
    [
      {transform: 'scale(1)'}
    ],    
    {
      duration: 200,
      fill: "forwards"
    }
  );
}
function clickScaleIn2(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2)'}
    ],    
    {
      //タイミングオプション
      duration: 100,
      fill: "forwards"
    }
  );
}
function clickScaleOut2(name) {
  const animation = document.getElementById(name).animate(
    [
      {transform: 'scale(1)'}
    ],    
    {
      duration: 200,
      fill: "forwards"
    }
  );
}
function clickScaleIn3(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2)'}
    ],    
    {
      //タイミングオプション
      duration: 100,
      fill: "forwards"
    }
  );
}


function clickScaleOut3(name) {
  const animation = document.getElementById(name).animate(
    [
      {transform: 'scale(1)'}
    ],    
    {
      duration: 200,
      fill: "forwards"
    }
  );
}
function clickScaleIn4(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2)'}
    ],    
    {
      //タイミングオプション
      duration: 1000,
      fill: "forwards"
    }
  );
}


function clickScaleOut4(name) {
  const animation = document.getElementById(name).animate(
    [
      {transform: 'scale(1)'}
    ],    
    {
      duration: 100,
      fill: "forwards"
    }
  );
}
function clickScaleIn5(name) {
  const animation = document.getElementById(name).animate(
    [
      //キーフレーム
      {transform: 'scale(1)'},
      {transform: 'scale(2)'}
    ],    
    {
      //タイミングオプション
      duration: 1000,
      fill: "forwards"
    }
  );
}


function clickScaleOut5(name) {
  const animation = document.getElementById(name).animate(
    [
      {transform: 'scale(1)'}
    ],    
    {
      duration: 100,
      fill: "forwards"
    }
  );
}