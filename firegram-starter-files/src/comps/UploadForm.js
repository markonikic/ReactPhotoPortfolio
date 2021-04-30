import React, { useState } from 'react';
import ProgressBar from '../comps/ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);

    const types = ['image/png', 'image/jpg', 'image/jpeg'];

    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    return (
        <form>
            <label className="hiddenLabel">
                <input id="file" type="file" onChange={changeHandler} />
                <label id="labelFile" htmlFor="file">Choose Photo</label>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;