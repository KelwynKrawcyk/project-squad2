'use strict'

            let photoBernardo = document.getElementById('bernardoImg');
            let fileBernardo = document.getElementById('imageBernardo');

                    photoBernardo.addEventListener('click', () => {
                    fileBernardo.click();
                    });

                    fileBernardo.addEventListener('change', () => {

                    if (fileBernardo.files.length <= 0) {
                    return;
                    }

            let readerBernardo = new FileReader();

                    readerBernardo.onload = () => {
                    photoBernardo.src = readerBernardo.result;
                    }

                    readerBernardo.readAsDataURL(fileBernardo.files[0]);
                    });



            let photoKaua = document.getElementById('kauaImg');
            let fileKaua = document.getElementById('imageKaua');

                    photoKaua.addEventListener('click', () => {
                    fileKaua.click();
                        });

                    fileKaua.addEventListener('change', () => {

                    if (fileKaua.files.length <= 0) {
                        return;
                    }

            let readerKaua = new FileReader();

                    readerKaua.onload = () => {
                    photoKaua.src = readerKaua.result;
                    }

                    readerKaua.readAsDataURL(fileKaua.files[0]);
                    });



            let photoIgor = document.getElementById('igorImg');
            let fileIgor = document.getElementById('imageIgor');

                    photoIgor.addEventListener('click', () => {
                        fileIgor.click();
                    });

                    fileIgor.addEventListener('change', () => {

                    if (fileIgor.files.length <= 0) {
                    return;
                    }

            let readerIgor = new FileReader();

                        readerIgor.onload = () => {
                        photoIgor.src = readerIgor.result;
                    }

                    readerIgor.readAsDataURL(fileIgor.files[0]);
                    });


            let photoKelwyn = document.getElementById('kelwynImg');
            let fileKelwyn = document.getElementById('imageKelwyn');
        
                    photoKelwyn.addEventListener('click', () => {
                        fileKelwyn.click();
                     });
        
                     fileKelwyn.addEventListener('change', () => {
        
                    if (fileKelwyn.files.length <= 0) {
                    return;
                     }
        
            let readerKelwyn = new FileReader();
        
                    readerKelwyn.onload = () => {
                        photoKelwyn.src = readerKelwyn.result;
                    }
        
                    readerKelwyn.readAsDataURL(fileKelwyn.files[0]);
                    });           

            let photoThauan = document.getElementById('thauanImg');
            let fileThauan = document.getElementById('imageThauan');
        
                        photoThauan.addEventListener('click', () => {
                            fileThauan.click();
                     });
        
                     fileThauan.addEventListener('change', () => {
        
                    if (fileThauan.files.length <= 0) {
                    return;
                     }
        
            let readerThauan = new FileReader();
        
                        readerThauan.onload = () => {
                        photoThauan.src = readerThauan.result;
                    }
        
                    readerThauan.readAsDataURL(fileThauan.files[0]);
                    });           

                    let photoManu = document.getElementById('manuImg');
                    let fileManu = document.getElementById('imageManu');
                
                                photoManu.addEventListener('click', () => {
                                    fileManu.click();
                             });
                
                             fileManu.addEventListener('change', () => {
                
                            if (fileManu.files.length <= 0) {
                            return;
                             }
                
                    let readerManu = new FileReader();
                
                                readerManu.onload = () => {
                                photoManu.src = readerManu.result;
                            }
                
                            readerManu.readAsDataURL(fileManu.files[0]);
                            });           
                



